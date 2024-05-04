function validate(username, password){
    var database = new Database();
    // Check for injected code in the password
    if (password.includes('||') || password.includes('//')) {
      return 'Wrong username or password!';
    }
    // If no injected code found, proceed with login
    return database.login(username, password);
  }


  //best practice
  function validate(username, password){
    var valid = new Validator();
    return valid.login(username, escape(password));
  }