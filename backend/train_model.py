import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib  # Importarlo arriba

# 1. Cargar datos
df = pd.read_csv('datos.csv')
X = df.drop('target', axis=1).values
y = df['target'].values

# 2. Preprocesamiento
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 3. Dividir en train/test
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# 4. Definir y entrenar el modelo
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1)  # Suponiendo regresión
])
model.compile(optimizer='adam', loss='mse', metrics=['mae'])
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.1)

# 5. Guardar modelo y scaler
model.save('modelo_tf.keras')      # ✅ Extensión correcta
joblib.dump(scaler, 'scaler.save') # ✅ Guarda el preprocesador
