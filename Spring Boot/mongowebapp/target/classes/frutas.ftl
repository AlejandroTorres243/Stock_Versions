<html>
<head>
    <title>Elige una fruta</title>
</head>
<body>
<h1>Elige una fruta</h1>
<form action="/fruta_elegida" method="post">
    <p>¿Cuál es tu fruta favorita?</p>
    <#list frutas as fruta>
        <input type="radio" name="fruta" value="${fruta}">${fruta}</input><br/>
    </#list>
    <input type="submit" name="Enviar" value="Enviar"/>
</form>
</body>
</html>