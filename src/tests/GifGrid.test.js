import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock('../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />',()=> {
    const category = 'hola';
  

    test('deben de mostrar <GifGrid /> correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('deben de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
  
        expect( wrapper).toMatchSnapshot();
    });

});