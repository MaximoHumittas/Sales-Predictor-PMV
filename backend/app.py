# app.py
import io
import matplotlib.pyplot as plt
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Permite peticiones desde tu frontend en React (http://localhost:3000)
CORS(app)

@app.route('/plot', methods=['POST'])
def plot():
    # 1) Leer JSON
    data = request.get_json()
    features = data.get('features', None)
    if features is None or not isinstance(features, list):
        return jsonify({'error': 'Debe enviar un JSON con "features": [num, …]'}), 400

    # 2) Preparar ejes
    x = list(range(len(features)))
    y = features

    # 3) Crear figura
    fig, ax = plt.subplots()
    ax.plot(x, y, marker='o')
    ax.set_title('Gráfica de features enviados')
    ax.set_xlabel('Índice')
    ax.set_ylabel('Valor')
    ax.grid(True)

    # 4) Volcar a buffer en PNG
    buf = io.BytesIO()
    fig.tight_layout()
    fig.savefig(buf, format='png')
    buf.seek(0)
    plt.close(fig)

    # 5) Enviar buffer como imagen
    return send_file(buf, mimetype='image/png')


if __name__ == '__main__':
    # DEBUG=True recarga el servidor al cambiar el código
    app.run(debug=True, port=5000)
