$(document).ready(function(){

    $("#submitButton").on('click', function(event) {

        event.preventDefault();

        console.log("submitting form");

        let cEmail = $("#companyEmail").val();
        let cPassword = $("#password").val();
        let companyName = $("#businessName").val();
        let siteStreet = $("#siteAddress").val();
        let siteCity = $("#city").val();
        let siteState = $("#state").val();
        let siteZip = $("#zip").val();
        let hqStreet = $("#hqAddress").val();
        let hqCity = $("#hqCity").val();
        let hqState = $("#hqState").val();
        let hqZip = $("#hqZip").val();
        let contractType = $("#contractType").val();

        console.log(contractType);

        //check to see if all fields have been filled out
        if(cEmail === undefined || cPassword === undefined || companyName === undefined || siteStreet === undefined || siteCity === undefined ||
            siteState === undefined || siteZip === undefined || hqStreet === undefined || hqCity === undefined || hqState === undefined || hqZip === undefined) {

            alert("Please complete the form to continue");

        } else if (cPassword !== $("#confirmPassword").val()) { //check to see if passwords match

            alert("Passwords do not match");

        } else { //if everything is good, then proceed to write to database

            let newCompany = {
                email: cEmail,
                password: cPassword,
                business_name: companyName,
                site_street: siteStreet,
                site_city_state_zip: siteCity + ", " + siteState + " " + siteZip,
                business_hq_street: hqStreet,
                business_city_state_zip: hqCity + ", " + hqState + " " + hqZip,
                contract_type: contractType
            }

            $.ajax("/database", {
                type:"POST",
                data: newCompany
            }).then(function(data) {
                console.log(data);
                alert("company added");
            });
        }


    });
});