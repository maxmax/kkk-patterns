// Title: Builder
//Description: constructs complex objects by separating construction and representation

export default function builderInt() {

  var Person = function () {
    var firstName, lastName

    var self = {
      firstName: function (n) {
        firstName = n
          return this
      },
      lastName: function (n) {
        lastName = n
        return this
      }
    }

    Object.defineProperty(self, "fullName", {
      get: function () {
        return firstName + ' ' + lastName;
      }
    });

    return self;

  }

  var x = new Person().firstName('bob').lastName('dole');

  return (
    console.log("fullName", x.fullName)
  );

}
