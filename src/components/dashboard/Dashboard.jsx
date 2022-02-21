
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contacts } from "./Contacts";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { NewContact } from "./NewContact";
function Dashboard() {
  return (
    <div className="App box">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />}>
        <Route index element={<NewContact />} />
          <Route path=":id" element={<Contact />} />
          <Route path="new" element={<NewContact />} />
       
        </Route>
      </Routes>
      {/* <Routes>
     <Route path="Contacts/:id" element={<Contact/>}/>
     </Routes> */}
    </div>
  );
}

export default Dashboard;
