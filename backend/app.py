# app.py
import os
import io
import numpy as np
import matplotlib
matplotlib.use('Agg')  # usa backend sin GUI
import matplotlib.pyplot as plt
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return "Servidor Flask operativo."

@app.route('/prediccion-mayo', methods=['POST'])
def prediccion_mayo():
    data = request.get_json()
    ventas = data.get('ventas')       # debe ser lista de 3 números
    precio = data.get('precio')       # número (USD)
    producto = data.get('producto', 'Producto')

    # Validaciones
    if not isinstance(ventas, list) or len(ventas) != 3:
        return jsonify({'error': 'Envía "ventas": [feb, mar, abr] (3 valores)'}), 400
    if not all(isinstance(v, (int, float)) for v in ventas):
        return jsonify({'error': 'Todos los valores de "ventas" deben ser numéricos'}), 400
    if not isinstance(precio, (int, float)):
        return jsonify({'error': 'Envía "precio" como número'}), 400

    # Regresión lineal simple: x=[2,3,4] → feb=2, mar=3, abr=4
    x = np.array([2, 3, 4])
    y = np.array(ventas)
    m, b = np.polyfit(x, y, 1)          # pendiente y ordenada
    pred_may = float(m * 5 + b)        # x=5 para mayo

    # Preparamos la gráfica
    meses_num = [1, 2, 3, 4]           # posiciones para Febrero→1 … Mayo→4
    meses_lbl = ['Febrero', 'Marzo', 'Abril', 'Mayo']
    valores = [ventas[0], ventas[1], ventas[2], pred_may]

    fig, ax = plt.subplots()
    ax.plot(meses_num, valores, marker='o')
    ax.set_xticks(meses_num)
    ax.set_xticklabels(meses_lbl)
    ax.set_title(f'Ventas y predicción Mayo: {pred_may:.2f} unidades a ${precio:.2f}')
    ax.set_ylabel('Unidades vendidas')
    ax.grid(True)

    buf = io.BytesIO()
    fig.tight_layout()
    fig.savefig(buf, format='png')
    buf.seek(0)
    plt.close(fig)

    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    # instala dependencias: *pip install flask flask_cors numpy matplotlib*
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
