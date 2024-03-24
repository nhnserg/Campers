import { useSelector } from 'react-redux'
import { FcHome } from "react-icons/fc";
import { selectFavorites } from '../../redux/adverts/selectors'
import { MainContainer } from '../../layouts/MainContainer'
import { HeaderBlock, Nav, NavigLink } from './Header.styled'
import Icon from '../icons/Icon';

const Header = () => {
    const Favorites = useSelector(selectFavorites);

    return (
        <HeaderBlock>
            <MainContainer>
                <Nav>
                    <ul>
                        <li>
                            <NavigLink to="/">
                                <FcHome size={40} />
                            </NavigLink>
                        </li>
                        <li>
                            <NavigLink to="/catalog">Catalog</NavigLink>
                        </li>
                        <li>
                            <NavigLink id="favs" to="/favorites">
                                {Favorites.length > 0 && <div>{Favorites.length}</div>}
                                <Icon width={40} height={40} svg={'icon-fav'} id={"fav-icon"} />
                            </NavigLink>
                        </li>
                    </ul>
                </Nav>
            </MainContainer>
        </HeaderBlock>
    );
};

export default Header;