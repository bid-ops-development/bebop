import React from 'react'
import bebop from 'bebop'

const { Card, Table } = bebop;

export function Catalog() { return <>
  <Card>
    <h1>Table</h1>
      Arrange data in rows and columns.

      <b>Key use case:</b> present a list of records.
      <h4>Examples</h4>
    <p>A simple example of a table...</p>
    <Table
      dataSource={[
        { greeting: 'Hey' }, { greeting: "What's up?" }, { greeting: 'Hello' }
      ]}
      columns={[{ title: 'Greeting', dataIndex: 'greeting' }]}
    />
  </Card>
</>
}