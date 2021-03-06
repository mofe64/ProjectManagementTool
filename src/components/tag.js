import { Component } from "react";

const tagBackgrounds = [
    'bg-yellow-300 bg-opacity-25',
    'bg-green-300 bg-opacity-25',
    'bg-blue-300 bg-opacity-25',
    'bg-indigo-300 bg-opacity-25'
]

const tagTextColor = [
    'text-yellow-600',
    'text-green-600',
    'text-blue-600',
    'text-indigo-600'
]
class Tag extends Component {
    constructor(props) {
        super(props)
        this.getStyleNo = this.getStyleNo.bind(this)
    }
    getStyleNo() {
        return Math.floor(Math.random() * 4)
    }
    render() {
        const styleNo = this.getStyleNo();
        const { tagname } = this.props; 
        return (
            <div className={tagBackgrounds[styleNo] + ' p-2 rounded-lg'}>
                <p className={tagTextColor[styleNo]}>{ tagname}</p>
            </div>
        )
    }
}
export default Tag;