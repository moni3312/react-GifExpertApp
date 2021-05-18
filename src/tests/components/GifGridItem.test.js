import {GifGridItem} from "../../components/GifGridItem";
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Pruebas en <GifGridItem />',()=> {
    const title = 'Un titulo';
    const url =  'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)


    test('deben de mostrar <GifGridItem /> correctamente', () => {
    // es para ver si hubo un cambio en el componente si falla es por que se cambio
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('deben de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('deben de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log( img.props().src); //props es de enzyme y se trae las propiedades de ese objeto en un arreglo
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });
    test('deben de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes("animate__fadeIn")).toBe(true);
    });
})