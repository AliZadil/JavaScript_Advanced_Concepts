function printAsncName(cb, str){
    setTimeout(()=>{
        cb();
        setTimeout(() => {
            console.log(str)
        }, 1000)
    }, 2000);    
}
// setTimeout seemed easier 