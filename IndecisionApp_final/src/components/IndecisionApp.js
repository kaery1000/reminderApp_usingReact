import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption : undefined
    }
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options) {
                this.setState( () => ({ options : options }));
            }
        } catch(e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if( prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options' ,json)
        }
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }

    handlleRemoveOption = (optionToRemove) => {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove
            })
        }));
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({selectedOption : option}))
    }

    closeModal = () => {
        this.setState(() => ({selectedOption: undefined }))
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid value to add';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ( {options: prevState.options.concat(option)} ) )
       
    }
    
    render() {
        const subTitle = "My first react app";
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action 
                        hasOption = {this.state.options.length > 0}
                        handlePick = {this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handlleRemoveOption = {this.handlleRemoveOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                    <OptionModal 
                        selectedOption = {this.state.selectedOption} 
                        closeModal = {this.closeModal}  
                    />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}