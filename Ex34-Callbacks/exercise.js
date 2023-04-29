function printAsncName(cb, str){
    setTimeout(()=>{
        cb();
    }, 1000);
    
}
