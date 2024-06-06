import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
       <ul>
            <li className="mr-7">
                <a href={route.path}>{route.name}</a>
            </li>
       </ul>
    );
};

Link.propTypes={
    route:PropTypes.object
}
export default Link;