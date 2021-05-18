import {shallow} from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe('Pruebas con <GifExpertApp />', () =>{

    test('debe de hacer match con el snapshot', ()=>{
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
 
    });

    test('debe de mostras una lista de categorias', ()=>{
        const categories = ['One Punch', 'Dragon Ball Z'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
 
    });

});