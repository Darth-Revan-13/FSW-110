const userForm = document.userInfo

userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const genderM = document.getElementById("genderM").value;
    const genderF = document.getElementById("genderF").value;
    const genderO = document.getElementById("genderO").value;
    if (genderM == true) {
        var gender = "Male"
        return gender
    }else if (genderF == true) {
        var gender = "Female"
        return gender
    }else if (genderO == true) {
        var gender = "Other/Prefer not to identify"
        return gender
    };
    const destinations = document.getElementById("destinations").value;
    const diet = document.getElementById("diet").value;
    const diet2 = document.getElementById("diet2").value;
    const diet3 = document.getElementById("diet3").value;
    if (diet == checked) {
        var dietaryRestrictions = "Lactose Intolerant"
        return dietaryRestrictions
    }else if (diet2 == checked) {
        var dietaryRestrictions = "Nut Allergy"
        return dietaryRestrictions
    }else if (diet3 == checked) {
        var dietaryRestrictions = "Peanut Allergy"
        return dietaryRestrictions
    }else if (diet == checked + diet2 == checked) {
        var dietaryRestrictions = "Lactose Intolerant and Nut Allergy"
        return dietaryRestrictions
    }else if (diet == checked + diet3 == checked) {
        var dietaryRestrictions = "Lactose Intolerant and Peanut Allergy"
        return dietaryRestrictions
    }else if (diet2 == checked + diet3 == checked) {
        var dietaryRestrictions = "Nut Allergy and Peanut Allergy"
        return dietaryRestrictions
    }else if (diet == checked + diet2 == checked + diet3 == checked) {
        var dietaryRestrictions = "Lactose Intolerant, Nut Allergy and Peanut Allergy"
        return dietaryRestrictions
    };

    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Destination: " + destinations + "\n" + "Dietary Restrictions: " + dietaryRestrictions)
})