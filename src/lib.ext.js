// @types/promise.prototype.finally
Promise.prototype.finally = function (cb) {
    this.then(cb).catch(cb);
};
Promise.prototype.tap = function (cb) {
    return this.then(function (value) {
        cb(value);
        return value;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpYi5leHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsbUNBQW1DO0FBQzdCLE9BQU8sQ0FBQyxTQUFVLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRTtJQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUE7QUFPSyxPQUFPLENBQUMsU0FBVSxDQUFDLEdBQUcsR0FBRyxVQUFZLEVBQVk7SUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBUTtRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDVixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIn0=