# THERMOMETER SENSOR APPLICATION

This application is responsible for keeping a sensor record of the thermometer. Application can save sensor value and can return sensor value

## Install
    npm install

## Run the app
    npm start

# REST API

## Get list of sensors value

### Request
`GET /api/temperature?startYear=''&startMonth=''&endYear=''&endMonth=''`

### Response
    {
      data: [
        {
          startDate: '2021-07-01',
          endDate: '2021-07-31',
          measurement: [
            { ts: '1625859231124', val: 30 },
            { ts: '1625859231324', val: 30 }
          ]
        }
      ],
      message: 'Successfully fetched',
      status: 200,
    }

## To save sensor value

### Request
`POST /api/temperature`

    { ts: '1625859231324', val: 30 }

### Response
    {
      data: {
        startDate: '2021-07-01',
        endDate: '2021-07-31',
        measurement: [
          { ts: '1625859231324', val: 30 }
        ]
      },
      message: 'Successfully saved',
      status: 200,
    }

## To save sensor value in bulk

### Request
`POST /api/temperature/upload`

    { file: THERM001.json }

### Response
    {
      data: {
        startDate: '2021-07-01',
        endDate: '2021-07-31',
        measurement: [
          { ts: '1625859231324', val: 30 },
          { ts: '1625859231324', val: 30 },
          { ts: '1625859231324', val: 30 },
          { ts: '1625859231324', val: 30 }
        ]
      },
      message: 'Successfully uploaded',
      status: 200,
    }