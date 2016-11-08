(function(){
    "use strict";

    var app = {
        
        init:function(){
            this.recuperation();
            $('form').on("submit",  app.ajout);
    },

        recuperation: function(response){
           $.ajax({
            url : "crm.json",
            method : "GET",
           }).done(function(response){
            var crm = response.customers;
            for(var i = 0; i < crm.length; i++){
                $("#crm").append("<ul id="+i+"></ul>");
            for(var cle in crm[i]){
                $("#"+i).append("<ul>"+crm[i][cle]+"</ul>")
            }
            }
        });
    },

        ajout: function(event){
        event.preventDefault();
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var telephone = $("#telephone").val();
        var mail = $("#mail").val();
        var des = $("#description").val();
        app.jsonform({first_name:prenom, last_name:nom, phone: telephone, email:mail, description:des});
        
    },
       

        jsonform: function(response){
        $.ajax({
          type: "POST",
          url: $("form").attr("action"),
          data: response,
          success: this.success
        })


    },
        success: function(){
            alert("ouép sa a marché");
        }
       




        
        
    };

    $(document).ready(function(){
        app.init();
    });
})();