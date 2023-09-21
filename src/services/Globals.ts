class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        phoneQuery: "http://localhost:8080/checkNumberOnDNC"
      
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        phoneQuery: "http://localhost:8080/checkNumberOnDNC"
       
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;