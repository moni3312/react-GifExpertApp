import { getGIfs } from "../helpers/getGifs";
import {shallow} from 'enzyme';
import { AddCategory } from "../components/AddCategory";
import toJson from "enzyme-to-json";

describe('Pruebas en <AddCategory />', () =>{
     
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);


    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    })
    test('debe de mostrarse correctamente', ()=>{
        expect( toJson(wrapper) ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', ()=>{
     const input = wrapper.find('input');
     const value = 'Hola'
     input.simulate('change', {target: {value} });
    
     expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test( 'NO debe de postear la informacion con submit', ()=>{
        wrapper.find('form').simulate('submit', { preventDefault(){} });   
        expect(setCategories).not.toHaveBeenCalled();

    });
    
    test( 'Debe de llamar el setCategories y limpiar la caja de texto', ()=>{
        const value = 'Hola';
        wrapper.find('input').simulate('change', {target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} });   
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');

    });

})