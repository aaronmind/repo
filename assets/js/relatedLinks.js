
$( document ).ready(function() {
    $("#li1").hide();
    $("#li2").hide();
    $("#li3").hide();
    $("#li4").hide();
    $("#li5").hide();

    $.getJSON("json/mortgage-protection.json", function(json) {
        $("#title0").append(json.title);
        $("#title1").append(json.title);
        $("#title2").append(json.title);
        var converter = new showdown.Converter();
        var html = converter.makeHtml(json.body);
        html = html.replaceAll("<ul>","<div class='two-column'><ul class='list-item clearfix'>");
        html = html.replaceAll("</ul>","</ul></div>");
        $("#bodyText").append(html);
        if(json.link1 != '' && json.lLink1 != '' && json.link1 != undefined && json.lLink1 != undefined) 
        {
            $("#link1").attr('href',json.link1); 
            $("#lLink1").append(json.lLink1);  
            $("#li1").show();
            
        }
        if(json.link2 != '' && json.lLink2 != '' && json.link2 != undefined && json.lLink2 != undefined)
        {
            $("#link2").attr('href',json.link2); 
            $("#lLink2").append(json.lLink2);  
            $("#li2").show();
           
        }
        if(json.link3 != '' && json.lLink3 != '' && json.link2 != undefined && json.lLink3 != undefined)
        {
            $("#link3").attr('href',json.link3); 
            $("#lLink3").append(json.lLink3);  
            $("#li3").show();
           
        }
        
        if(json.link4 != '' && json.lLink4 != '' && json.link3 != undefined && json.lLink4 != undefined)
        {
            $("#link4").attr('href',json.link4); 
            $("#lLink4").append(json.lLink4);  
            $("#li4").show();
            
        }
        if(json.link5 != '' && json.lLink5 != '' && json.link4 != undefined && json.lLink5 != undefined)
        {
            $("#link5").attr('href',json.link5); 
            $("#lLink5").append(json.lLink5);  
            $("#li5").show();
            
        }
    });
});
