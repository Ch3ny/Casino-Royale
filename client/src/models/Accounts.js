export const getAccounts = async () => {
    try {
      const req = await fetch("http://localhost:3000/accounts", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "GET"
      });
      if (!req.ok) {
        throw new Error(`Error: ${req.status}`);
      }
      const data = await req.json();
      return {
        payload: data.payload,
        msg: data.msg,
        status: req.status
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        payload: [],
        msg: error.message,
        status: 500
      };
    }
  }
  
  export const getAccount = async (id) => {
    try {
      const req = await fetch(`http://localhost:3000/accounts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "GET"
      });
      if (!req.ok) {
        throw new Error(`Error: ${req.status}`);
      }
      const data = await req.json();
      return {
        payload: data.payload,
        msg: data.msg,
        status: req.status
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        payload: null,
        msg: error.message,
        status: 500
      };
    }
  }
  
  export const createAccount = async (formData) => {
    try {
      const req = await fetch("http://localhost:3000/accounts", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
      });
      if (!req.ok) {
        throw new Error(`Error: ${req.status}`);
      }
      const data = await req.json();
      return {
        payload: data.payload,
        msg: data.msg,
        status: req.status
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        payload: null,
        msg: error.message,
        status: 500
      };
    }
  }
  
  export const updateAccount = async (id, formData) => {
    try {
      const req = await fetch(`http://localhost:3000/accounts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
      });
      if (!req.ok) {
        throw new Error(`Error: ${req.status}`);
      }
      const data = await req.json();
      return {
        payload: data.payload,
        msg: data.msg,
        status: req.status
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        payload: null,
        msg: error.message,
        status: 500
      };
    }
  }
  
  export const deleteAccount = async (id) => {
    try {
      const req = await fetch(`http://localhost:3000/accounts/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "DELETE"
      });
      if (!req.ok) {
        throw new Error(`Error: ${req.status}`);
      }
      const data = await req.json();
      return {
        payload: data.payload,
        msg: data.msg,
        status: req.status
      };
    } catch (error) {
      console.error('Fetch error:', error);
      return {
        payload: null,
        msg: error.message,
        status: 500
      };
    }
  }
  