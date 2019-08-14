/// <reference path="data.ts" />
const API = (function () {
    const timeout = () => Math.random() * 100;
    const wrapWithPromise = (fn) => (...args) => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(fn(...args)), timeout()));
    };
    const getEmployee = wrapWithPromise(db.getEmployeeById);
    const getEmployeesByNationality = wrapWithPromise(db.getEmployeesByNationality);
    const getNationalities = wrapWithPromise(db.getNationalities);
    return {
        // getEmployee(id): thenable
        getEmployee,
        // getEmployeesByNationality(nationality): thenable
        getEmployeesByNationality,
        // getNationalities(): thenable
        getNationalities,
    };
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUVoQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRVosTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQTtJQUV6QyxNQUFNLGVBQWUsR0FBRyxDQUFJLEVBQVksRUFBRSxFQUFFLENBQzNDLENBQUMsR0FBRyxJQUFJLEVBQWMsRUFBRTtRQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUNqRCxDQUFBO0lBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxXQUFXLEdBQ2QsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV2QyxNQUFNLHlCQUF5QixHQUM1QixlQUFlLENBQUMsRUFBRSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFFakQsTUFBTSxnQkFBZ0IsR0FDbkIsZUFBZSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBRXZDLE9BQU87UUFDTiw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLG1EQUFtRDtRQUNuRCx5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLGdCQUFnQjtLQUNoQixDQUFBO0FBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9