setTimeout(() => {
    console.log("step1")
    setTimeout(() => {
        console.log("step2")
        setTimeout(() => {
            console.log("step3")

        }, 1000);
    }, 1000);
}, 1000);