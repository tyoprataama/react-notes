import React from 'react';

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50
        }
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    }
    onBodyChangeHandler(event) {
        this.setState(() => {
            return{
                body: event.target.value
            }
        })
    }
    onSubmitHandler(event) {
        event.prevenDefault();
        this.props.addNotes(this.state);
        const message = `
        Data berhasil ditambahkan:
        Title: ${this.state.title}
        Body: ${this.state.body}
        `;
        alert(message);
    }
    onTitleChangeHandler(event) {
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }
    render() {
        return (
            <div>
                <form className='note-input' onSubmit={this.onSubmitHandler}>
                    <h2>Buat Catatan</h2>
                    <p className='note-input__title__char-limit'>
                        {this.state.limit} word left
                    </p>
                    <input type='text' id='title' 
                    placeholder='Ini adalah judul ...' 
                    required value={this.state.title}
                    onChange={this.onTitleChangeHandler} />
                    <textarea id='body' 
                    placeholder='Masukkan catatan disini' 
                    required value={this.state.body}
                    onChange={this.onBodyChangeHandler}></textarea>
                    <button type='submit' id='submit'>Buat</button>
                </form>
            </div>
        )
    }
}

export default Input;