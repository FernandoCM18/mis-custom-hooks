# useForm Hook

Ejemplo:
```
    const initialForm = {
        name: '',
        age: '',
        email: ''
    }; 
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```