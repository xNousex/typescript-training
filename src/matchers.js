var customMatchers = {
    toEqualJSON: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                var str = JSON.stringify;
                var dump = function (collection) {
                    return str(collection.map(function (element) {
                        return str(element);
                    }).sort());
                };
                var result = {
                    pass: util.equals(dump(actual), dump(expected), customEqualityTesters)
                };
                if (result.pass) {
                    result.message = "Expected " + str(actual) + " not to be equal to " + str(expected);
                }
                else {
                    result.message = "Expected " + str(actual) + " to be equal to " + str(expected);
                }
                return result;
            }
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGNBQWMsR0FBRztJQUNwQixXQUFXLEVBQUUsVUFBUyxJQUFJLEVBQUUscUJBQXFCO1FBQ2hELE9BQU87WUFDTixPQUFPLEVBQUUsVUFBUyxNQUFNLEVBQUUsUUFBUTtnQkFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekIsSUFBSSxJQUFJLEdBQUcsVUFBUyxVQUFVO29CQUM3QixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVMsT0FBTzt3QkFDekMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDO2dCQUNGLElBQUksTUFBTSxHQUFRO29CQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLHFCQUFxQixDQUFDO2lCQUN0RSxDQUFDO2dCQUNGLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDaEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEY7cUJBQU07b0JBQ04sTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDaEY7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDZixDQUFDO1NBQ0QsQ0FBQztJQUNILENBQUM7Q0FDRCxDQUFDIn0=