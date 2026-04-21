<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Seguro HTTPS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="login-container">
    <div class="login-card">

      <div class="logo-box">
        <div class="lock-icon">🔒</div>
        <h1>Secure Login</h1>
        <p>Comparación entre HTTP y HTTPS</p>
      </div>

      <form id="loginForm">
        <h2>Iniciar sesión</h2>

        <label for="usuario">Usuario</label>
        <input type="text" id="usuario" placeholder="Ingresa tu usuario" required>

        <label for="clave">Contraseña</label>
        <div class="password-box">
          <input type="password" id="clave" placeholder="Ingresa tu contraseña" required>
          <button type="button" id="togglePassword" class="toggle-btn">Mostrar</button>
        </div>

        <div class="extra-options">
          <label class="recordarme">
            <input type="checkbox" id="recordarme">
            Recordarme
          </label>
        </div>

        <button type="submit" class="login-btn">Ingresar</button>

        <p id="mensaje"></p>
      </form>

      <div class="info-box">
        <p><strong>Protocolo actual:</strong> <span id="protocolo"></span></p>
        <p><strong>Conexión segura:</strong> <span id="estadoSeguridad"></span></p>
        <p><strong>Servidor:</strong> Node.js + Express</p>
        <p><strong>Certificado:</strong> SSL auto-firmado con OpenSSL</p>
      </div>

      <div class="buttons-box">
        <a href="http://localhost:3000" class="http-btn">Ir a HTTP</a>
        <a href="https://localhost:8080" class="https-btn">Ir a HTTPS</a>
      </div>

    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
