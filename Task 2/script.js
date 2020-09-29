function showError(field) {
    const subbmitButton = document.getElementById('submit')
    const bitcoinAddress = document.getElementById('input-address')
    const amountToSend = document.getElementById('input-amount')
    const authentication = document.getElementById('input-otp')

    switch (field) {
        case 1:
            if (!bitcoinAddress.value.includes('@')) {
                bitcoinAddress.classList.add("error");
                subbmitButton.disabled = true
                subbmitButton.classList.add("errorButton");
            } else {
                bitcoinAddress.classList.remove("error");
                subbmitButton.disabled = false
                subbmitButton.classList.remove("errorButton");
            }
            break

        case 2:
            if(amountToSend.value <= 0 || amountToSend.value === ''){
                amountToSend.classList.add('error');
                subbmitButton.disabled = true
                subbmitButton.classList.add("errorButton");
            }else{
                amountToSend.classList.remove('error');
                subbmitButton.disabled = false
                subbmitButton.classList.remove("errorButton");
            }
            break

        case 3:
            if(authentication.value === ''){
                    authentication.classList.add('error');
                    subbmitButton.disabled = true
                    subbmitButton.classList.add("errorButton");
                }else{
                    authentication.classList.remove('error');
                    subbmitButton.disabled = false
                    subbmitButton.classList.remove("errorButton");
                }
            break
    }
}

