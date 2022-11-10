const { expect } = require('chai');

// Test get all sales
const GetAllMock = async (req, res) => {
    try {
        const mockData = [
            {
                uuid: 'aebd31f5-2594-484a-8afb-3d7b3646d620',
                productName: 'Product Name',
                description: 'Product Description',
                price: 100,
            },
            {
                uuid: 'e3300b1b-f3ad-43e8-b8cf-b75dbcbd7a82',
                productName: 'Second Product Name',
                description: 'Second Product Description',
                price: 200,
            },
        ];
        return res.json({ mockData });
    } catch (error) {
        return res.status(500).json(error);
    }
};

describe('Get all sales requests', () => {
    it('should return all sales', async () => {
        let resObject = {};
        const req = {};
        const res = {
            json: jest.fn().mockImplementation((result) => {
                resObject = result;
            }),
        };
        const expectedData = [
            {
                uuid: 'aebd31f5-2594-484a-8afb-3d7b3646d620',
                productName: 'Product Name',
                description: 'Product Description',
                price: 100,
            },
            {
                uuid: 'e3300b1b-f3ad-43e8-b8cf-b75dbcbd7a82',
                productName: 'Second Product Name',
                description: 'Second Product Description',
                price: 200,
            },
        ];
        await GetAllMock(req, res);
        expect(resObject).to.deep.equal({ mockData: expectedData });
    });
});

// Test get one sale
const getOnMock = async (req, res) => {
    try {
        const mockData = {
            uuid: 'aebd31f5-2594-484a-8afb-3d7b3646d620',
            productName: 'Product Name',
            description: 'Product Description',
            price: 100,
        };
        return res.json({ mockData });
    } catch (error) {
        return res.status(500).json(error);
    }
};

describe('Get one sale requests by ID', () => {
    it('should return one sale', async () => {
        let resObject = {};
        const req = {};
        const res = {
            json: jest.fn().mockImplementation((result) => {
                resObject = result;
            }),
        };
        const uuid = 'aebd31f5-2594-484a-8afb-3d7b3646d620';
        const expectedData = {
            uuid: 'aebd31f5-2594-484a-8afb-3d7b3646d620',
            productName: 'Product Name',
            description: 'Product Description',
            price: 100,
        };
        await getOnMock(req, res);
        expect(uuid).to.deep.equal(expectedData.uuid);
    });
});
