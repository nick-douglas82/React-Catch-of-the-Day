import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
    static propTypes = {
        addFish: PropTypes.func
    }

    priceRef = React.createRef();
    nameRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        const fish = {
            price: parseFloat(this.priceRef.current.value),
            name: this.nameRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        this.props.addFish(fish);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit"  onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
                <input type="text" name="price" ref={this.priceRef} placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
                <input type="text" name="image" ref={this.imageRef} placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
