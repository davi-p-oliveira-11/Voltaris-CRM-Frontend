export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start">
           
            <a className="btn btn-ghost text-xl"> Voltaris CRM </a>
        </div>
        <div className="navbar-center">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
            </div>
        </div>
        <div className="navbar-end">
            <a className="btn btn-primary" >Add New Client</a>
        </div>
        </div>

    </>
  );
}
