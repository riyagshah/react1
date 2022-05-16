import logo from './logo.svg';
import './App.css';
import First from './components/first'
import Second from './components/second'
import Navbarlogo from './components/navbarlogo'
import Navbarlinks from './components/navbarlinks'
import Navbarbutt from './components/navbarbutt'
import './style.css'
function App() {
let info=[
 { title:"services"
 },
 { title:"projects"},
 {title:"About"}

]
return(

<div>
<div className="main">
<div>
<Navbarlogo></Navbarlogo>
</div>

<div className="middle">


{
  info.map((user)=>(
    <div key={user.title}>
    <Navbarlinks {...user}/>
    </div>
  ))

}
</div>
<div>
<Navbarbutt></Navbarbutt>
</div>

</div>



<div>
<First></First>
<Second></Second>
</div>
</div>
);
}

export default App;
// <div className="middle">

// {
//   info.map((user)=>{
//     <div key={user.title}>
//     <Navbarlinks {...user}/>
//     </div>
//   })
// }

// </div>