import { useHttp } from './useHttp';

export const useRestoRespository = () => {
    const http = useHttp();

    /**
     * 
     * get all resto form the server.
     * 
     * @returns array 
     */
    const index = () => http.get("/api/restos");

    /**
     * 
     * Show specific resto from the database
     * 
     * @param {number|string} id The id of the record stored in the database.
     * @return object
     */
    const show = (id) => http.get(`/api/restos/${id}`);

    /**
     * Store new record to the database.
     * @param {object} data The data to be stored on the database
     * @return object
     */
    const store = (data) => http.get("/api/restos", data);

    /**
     * Update The specified record on the database with the new data
     * 
     * @param {*} id The id of the record stored in the database.
     * @param {*} data The data to be stored on the database.
     * @returns object
     */
    const update = (id, data) => http.get(`/api/restos/${id}`, data);

    /**
     * Delete the specified record on the database.
     * 
     * @param {*} id The id of the record stored in the database
     * @return object
     */

    const destroy = (id) => http.get(`api/restos/${id}`);

    return {
        index,
        show,
        store,
        update,
        destroy,
    };
}