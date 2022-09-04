import React from 'react';

class InputNotes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            body:'',
            limit:50,
        };
        this.onTitleHandler = this.onTitleHandler.bind(this);
        this.onBodyHandler = this.onBodyHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

    onTitleHandler(event){
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        });
    }

    onBodyHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
        const message = `
        Notes Berhasil Ditambahkan..
        Title: ${this.state.title}
        Body: ${this.state.body}
      `;
  
      alert(message);
    }
    render(){
        return(
            <div>
                <form className='note-input' onSubmit={this.onSubmitHandler}>
                <h2>Buat Catatan</h2>
                    <p className='note-input__title__char-limit'>
                        {this.state.limit - this.state.title.length} kata tersisa
                    </p>
                    <input type='text' id='title' placeholder='Ini adalah judul ...'
                    required value={this.state.title} onChange={this.onTitleHandler}/>
                    <textarea id='body' placeholder='Masukkan Catatan Di sini' required value={this.state.body} onChange={this.onBodyHandler}></textarea>
                    <button type='submit' id='submit'>Buat</button>
                </form>
            </div>
        )
    }
}

export default InputNotes;