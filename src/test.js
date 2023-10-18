function myFunction() {
    // 记录开始时间
    const startTime = new Date();

    // 在这里编写你的业务逻辑
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
        total++;
    }

    // 记录结束时间
    const endTime = new Date();

    // 计算执行时间（以毫秒为单位）
    const executionTime = endTime - startTime;

    // 输出执行时间
    console.log(`代码执行时间：${executionTime} 毫秒`);
}

myFunction();