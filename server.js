 
  // Loads express
  const express = require("express");
  // import the controller function
  const getData = require("./Controllers/getData");
  // call getData
  const studentsData = getData();

  // create an instance of express
  const app = express();
  const PORT = 3000;

  // Middleware functions
  // they update the request as soon as they come in.
  app.use((req, res, next) => {
    console.log(`Running middleware function!!!`);
    next(); // got to the next middleware or to the response
  });
  // JSON Middleware
  app.use(express.json())
  // if we dont need to read data from the url 
  app.use(express.urlencoded({extended: false}))


  // Setup view engine
  app.set("view engine", "ejs");
  app.set("views", "./Views");

  // Root route
  app.get("/", (req, res) => {
      res.render("home", {
        pageTitle: "Students Home Page",
        pageHeader: "Welcome to Students Home Page",
      });
    });

  // display all students route 1
    app.get("/learners", (req, res) => {
      res.render("learners", { data: studentsData, pageTitle: "Students Page Route 1",pageHeader: "Students Page Route 1" });
    }); 

    // display all students  route 2
    app.get("/learners/route2", (req, res) => {
      res.render("learners", { data: studentsData, pageTitle: "Students Page Route 2",pageHeader: "Students Route 2" });
    }); 
  
    // display all students  route 3
    app.get("/learners/route3", (req, res) => {
      res.render("learners", { data: studentsData, pageTitle: "Students Page Route 3",pageHeader: "Students Route 3" });
    }); 


    // display all students  route 4
    app.get("/learners/route4", (req, res) => {
      res.render("learners", { data: studentsData, pageTitle: "Students Page Route 4",pageHeader: "Students Route 4" });
    });     

   // display all students  route 5
   app.get("/learners/route5", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 5",pageHeader: "Students Route 5" });
   });     

    // display all students  route 6
   app.get("/learners/route6", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 6",pageHeader: "Students Route 6" });
   });     

   // display all students  route 7
   app.get("/learners/route7", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 7",pageHeader: "Students Route 7" });
   });     

  // display all students  route 8
  app.get("/learners/route8", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 8",pageHeader: "Students Route 8" });
   });     

   // display all students  route 9
  app.get("/learners/route9", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 9",pageHeader: "Students Route 9" });
   });     

  // display all students  route 10
  app.get("/learners/route10", (req, res) => {
    res.render("learners", { data: studentsData, pageTitle: "Students Page Route 18",pageHeader: "Students Route 10" });
   });     


   // display one student
  app.get("/learners/:id", (req, res) => {
  
    const result = studentsData.filter(item => item.id === Number( req.params.id))
    if (result[0] == undefined){
      res.status(404).render("404");
     } else {
          res.render("show", { student: result[0], pageTitle: `Details for ${result[0].name}`  });
     } 
  }); 

    // App Listener
  app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });