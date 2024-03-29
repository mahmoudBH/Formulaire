document.getElementById("nom").addEventListener('input', function () {
    var nom = document.getElementById("nom").value;
    var text = document.getElementById("text");

    if (nom.trim() !== "") {
        function alpha(ch) {
            ch = ch.toUpperCase();
            i = 0;
            while ((ch.charCodeAt(i) >= 65) && (ch.charCodeAt(i) <= 90) && (i < ch.length))
                i = i + 1;
            if (i == ch.length) return true;
            return false;
        }

        if (alpha(nom)) {
            text.innerHTML = "✅";
        } else {
            text.innerHTML = "❌";
        }
    } else {
        text.innerHTML = "❌";
    }
})

document.getElementById("prenom").addEventListener('input', function () {
    var prenom = document.getElementById("prenom").value;
    var textpre = document.getElementById("text_pre");

    if (prenom.trim() !== "") {
        function alpha(ch) {
            ch = ch.toUpperCase();
            i = 0;
            while ((ch.charCodeAt(i) >= 65) && (ch.charCodeAt(i) <= 90) && (i < ch.length))
                i = i + 1;
            if (i == ch.length) return true;
            return false;
        }

        if (alpha(prenom)) {
            textpre.innerHTML = "✅";
        } else {
            textpre.innerHTML = "❌";
        }
    } else {
        textpre.innerHTML = "❌";
    }
})

document.getElementById("age").addEventListener('input', function () {
    var age = document.getElementById("age").value;
    var textage = document.getElementById("text_age");

    if (age.trim() !== "") {
        function agee(ch) {
            ch = ch.toUpperCase();
            i = 0;
            while ((ch.charCodeAt(i) >= 48) && (ch.charCodeAt(i) <= 57))
                i = i + 1;
            if (i == ch.length) return true;
            return false;
        }

        if (agee(age)) {
            textage.innerHTML = "✅";
        } else {
            textage.innerHTML = "❌";
        }
    } else {
        textage.innerHTML = "❌";
    }
})

document.getElementById("numero").addEventListener('input', function () {
    var num = document.getElementById("numero").value;
    var textnum = document.getElementById("text_num");

    if (num.trim() !== "") {
        function numero(ch) {
            ch = ch.toUpperCase();
            i = 0;
            while ((ch.charCodeAt(i) >= 48) && (ch.charCodeAt(i) <= 57) && (ch.length >= 8))
                i = i + 1;
            if (i == ch.length) return true;
            return false;
        }

        if (numero(num)) {
            textnum.innerHTML = "✅";
        } else {
            textnum.innerHTML = "❌";
        }
    } else {
        textnum.innerHTML = "❌";
    }
})

document.getElementById("email").addEventListener('input', function () {
    var email = document.getElementById("email").value;
    var textemail = document.getElementById("text_email");

    if (email.trim() !== "") {
        function estmail(ch) {
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(ch);
        }

        if (estmail(email)) {
            textemail.innerHTML = "✅";
        } else {
            textemail.innerHTML = "❌";
        }
    } else {
        textemail.innerHTML = "❌";
    }
})

document.getElementById("password").addEventListener('input', function () {
    var pas = document.getElementById("password").value;
    var textpas = document.getElementById("text_password");

    if (pas.trim() !== "") {
        function passworde(ch) {
            ch = ch.toUpperCase();
            i = 0;
            while ((ch.charCodeAt(i) >= 1) && (ch.charCodeAt(i) <= 255) && (i < ch.length) && (ch.length > 8))
                i = i + 1;
            if (i == ch.length) return true;
            return false;
        }

        if (passworde(pas)) {
            textpas.innerHTML = "✅";
        } else {
            textpas.innerHTML = "❌";
        }
    } else {
        textpas.innerHTML = "❌";
    }
})

function validerFormulaire() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var age = document.getElementById("age").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nom !== "" && prenom !== "" && age !== "" && numero !== "" && email !== "" && password !== "") {
        alert("Inscription réussit");
    } else {
        alert("Veuillez remplir tous les champs");
    }
}
