export const getAccounts = async () =>{
  const req = await fetch("http://localhost:3000/accounts", {
      headers: {
          "Content-Type": "application/json",
          "Accpet": "application/json"
      },
      method: "GET"
  });
  const data = await req.json();
  return{
      payload: data.payload,
      msg: data.msg,
      status: req.status
  }
}
export const getAccount = async (id) =>{
  const req = await fetch(`http://localhost:3000/accounts/${id}`, {
      headers: {
          "Content-Type": "application/json",
          "Accpet": "application/json"
      },
      method: "GET"
  });
  const data = await req.json();
  return{
      payload: data.payload,
      msg: data.msg,
      status: req.status
  }
}
export const createAccount = async (formData) =>{
  const req = await fetch("http://localhost:3000/accounts", {
      headers: {
          "Content-Type": "application/json",
          "Accpet": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formData)
  });
  const data = await req.json();
  return{
      payload: data.payload,
      msg: data.msg,
      status: req.status
  }
}
export const updateAccount = async (id, formData) =>{
  const req = await fetch(`http://localhost:3000/accounts/${id}`, {
      headers: {
          "Content-Type": "application/json",
          "Accpet": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(formData)
  });
  const data = await req.json();
  return{
      payload: data.payload,
      msg: data.msg,
      status: req.status
  }
}
export const deleteAccount = async (id) =>{
  const req = await fetch(`http://localhost:3000/accounts/${id}`, {
      headers: {
          "Content-Type": "application/json",
          "Accpet": "application/json"
      },
      method: "DELETE"
  });
  const data = await req.json();
  return{
      payload: data.payload,
      msg: data.msg,
      status: req.status
  }
}