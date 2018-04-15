<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/node_modules/jquery-ui-dist/jquery-ui.min.css">
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/simple-sidebar.css">
    <script src="/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/node_modules/jquery-ui-dist/jquery-ui.min.js"></script>
    <script src="/node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <title>Test Monitoring</title>
</head>
<body>
<jsp:include page="../sidebar.jsp" >
    <jsp:param name="pageContent" value="<h1>Test Monitoring</h1>
                                        <p>To Test: Send a post request to /ca4006/bid with a bid object (eg.
                                         {\"value\":0.0,
                                         \"id\":null,
                                         \"propertyId\":\"test\",
                                         \"userId\":null,
                                         \"createdDate\":null,
                                         \"bidStatus\":null})
                                         with the propertyId set to test</p>
                                         <div id=output></div>
                                         <br/>" />
</jsp:include>

</body>
</html>