
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [errorMessage, setErrorMessage] = useState('');
    


    const handleMouseLeave = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        switch (inputType) {
            case 'email': 
            if ((inputValue == '' ||  !validateEmail(inputValue))) {
                setErrorMessage('Please enter a valid email');
            }
            
            break;
            
            case 'name': 
                if (inputValue == '')  {
                    setErrorMessage('Name cannot be empty');
                    
                }
                
                
            break;

            case 'message': 
                if (inputValue == '')  {
                    setErrorMessage('Message cannot be empty');
                }
                
                
            break;

        }
        
    }

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
        

        switch (inputType) {
            case 'email': 
            if (inputValue != ''){
                setEmail(inputValue);
            }
            else setErrorMessage('Please enter a valid email');
                
            
                
            break;
            
            case 'name': 
                if (inputValue != '')  {
                    setName(inputValue);
                    
                }
                
            break;

            case 'message': 
                if (inputValue != '')  {
                    setMessage(inputValue);
                }
                
            break;

        }

        
    };
    
    const handleSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        alert('Thank you for reaching out')
        setName('');
        setMessage('');
        setEmail ('');
    };

    return (
        
    <div>
      <h2 style ={{"padding-top": "10px"}}>
                    Contact me
                </h2>
      <form className="form">
        <input
          value={name}
          name="name"
          onMouseLeave={handleMouseLeave}
          onChange = {handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onMouseLeave={handleMouseLeave}
          onChange= {handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onMouseLeave={handleMouseLeave}
          onChange= {handleInputChange}
          
          
          placeholder="Message"
        />
        
      
        <input type="submit" onClick={handleSubmit} className = "btn btn-primary"/>
          
        
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    
//     <Form onSubmit={handleSubmit}>
//     <Form.Group className="mb-3" controlId="name">
//       <Form.Label>Name</Form.Label>
//       <Form.Control type="text" placeholder="Enter your Name" value ={name} onChange={handleInputChange} onMouseLeave ={handleMouseLeave} />
      
//     </Form.Group>
  
//     <Form.Group className="mb-3" controlId="email">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="text" placeholder="Email" value ={email} onMouseLeave={handleMouseLeave} onChange= {handleInputChange}/>
//       <Form.Text className="text-muted">
//       I'll never share your email with anyone else.
//     </Form.Text>
//     </Form.Group>
    
//     <Form.Group className="mb-3" controlId="message">
//       <Form.Label>Message</Form.Label>
//       <Form.Control as="textarea" placeholder="Message" value ={message} onMouseLeave={handleMouseLeave} onChange= {handleInputChange}/>
      
//     </Form.Group>

//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>

    )
}

export default Contact