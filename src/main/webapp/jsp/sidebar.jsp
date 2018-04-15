<%@ page contentType="text/html;charset=UTF-8" language="java" %>



<div id="wrapper">

    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="/index.jsp">
                    Home
                </a>
            </li>
            <li>
                <a href="/jsp/view/test-monitoring.jsp">
                    Test Monitoring
                </a>
            </li>
        </ul>
    </div>

    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
                    ${param.pageContent}

                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
</script>
