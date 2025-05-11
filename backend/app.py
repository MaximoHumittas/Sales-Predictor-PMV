# app.py
import os
import io
import numpy as np
import matplotlib
matplotlib.use('Agg')  # Usa backend sin GUI para evitar errores
import matplotlib.pyplot as plt
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:3000",
            "http://localhost:5173",
            "https://sales-predictor-pmv-two.vercel.app"
        ]
    }
})


@app.route('/')
def home():
    return "Servidor Flask operativo."

@app.route('/prediccion-junio', methods=['GET'])
def prediccion_junio():
    dias = list(range(1, 31))
    predicciones = np.random.uniform(100, 500, size=30).round(2).tolist()
    return jsonify({'dias': dias, 'predicciones': predicciones})

@app.route('/prediccion-mensual', methods=['GET'])
def prediccion_mensual():
    mes = request.args.get('mes', '').lower()
    meses_validos = ['junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

    if mes not in meses_validos:
        return jsonify({'error': 'Mes inválido. Usa: junio, julio, ..., diciembre'}), 400

    dias = list(range(1, 31))
    predicciones = np.random.uniform(100, 500, size=30).round(2).tolist()
    return jsonify({'mes': mes.capitalize(), 'dias': dias, 'predicciones': predicciones})

@app.route('/plot', methods=['POST'])
def plot():
    data = request.get_json()
    features = data.get('features')
    producto = data.get('producto', 'Producto')

    # Validación de entrada
    if features is None or not isinstance(features, list):
        return jsonify({'error': 'Debe enviar un JSON con "features": [num, …]'}), 400
    if not all(isinstance(f, (int, float)) for f in features):
        return jsonify({'error': 'Todos los elementos de "features" deben ser números'}), 400

    # Crear gráfica
    x = list(range(1, len(features) + 1))
    y = features

    fig, ax = plt.subplots()
    ax.plot(x, y, marker='o')
    ax.set_title(f'Gráfica de ventas: {producto}')
    ax.set_xlabel('Días')
    ax.set_ylabel('Valor en dólares')
    ax.grid(True)

    buf = io.BytesIO()
    fig.tight_layout()
    fig.savefig(buf, format='png')
    buf.seek(0)
    plt.close(fig)

    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Usa el puerto de Render o 5000 por defecto
    app.run(host='0.0.0.0', port=port)
