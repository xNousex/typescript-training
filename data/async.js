// creates coroutines
function async(makeGenerator) {
    return function (...args) {
        var generator = makeGenerator.apply(this, arguments);
        function handle(result) {
            // result => { done: [Boolean], value: [Object] }
            if (result.done)
                return Promise.resolve(result.value);
            return Promise.resolve(result.value).then(function (res) {
                return handle(generator.next(res));
            }, function (err) {
                return handle(generator.throw(err));
            });
        }
        try {
            return handle(generator.next());
        }
        catch (ex) {
            return Promise.reject(ex);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckIsU0FBUyxLQUFLLENBQUksYUFBdUI7SUFDeEMsT0FBTyxVQUFVLEdBQUcsSUFBSTtRQUN2QixJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVyRCxTQUFTLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLGlEQUFpRDtZQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJO2dCQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUN0RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFFLFVBQVUsR0FBRztnQkFDZixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsSUFBSTtZQUNILE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDWixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDLENBQUE7QUFDRixDQUFDIn0=