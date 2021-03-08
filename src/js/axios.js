import axios from 'axios';

export default axios.create({
    baseURL: "http://www.cmtthz.com/DataV/",
    timout: 1000
});
