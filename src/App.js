import React, { useState, useEffect} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    country: '',
    city: ''
  });
  

  useEffect(() => {
    // Fetch data from API using filters
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/getData');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





    console.log("Fetched data:", data);

    return (
      <div>
        <h1>Data Visualization Dashboard</h1>

        
        <div className='flex gap-x-2 '>
          <label>
            End Year:
            <input 
            type="text" 
            name="endYear" 
            value={filters.endYear}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'  />
          </label>
          <label>
            Topics:
            <input 
            type="text" 
            name="topics" 
            value={filters.topics}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'   />
          </label>
          <label>
            Sector:
            <input 
            type="text" 
            name="sector" 
            value={filters.sector}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'  />
          </label>
          <label>
            Region:
            <input 
            type="text" 
            name="region" 
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md' />
          </label>
          <label>
            Pestle:
            <input 
            type="text" 
            name="pestle" 
            value={filters.pestle}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'  />
          </label>
          <label>
            Source:
            <input 
            type="text" 
            name="source" 
            value={filters.source}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'  />
          </label>

          <label>
            Country:
            <input 
            type="text" 
            name="country" 
            value={filters.country}
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md'  />
          </label>

          <label>
            City:
            <input 
            type="text" 
            name="city" 
            value={filters.city} 
            onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
            className='border rounded-md' />
          </label>


        </div>
       
        <Table className="border-collapse border">
          <Thead className="border-collapse border">
            <Tr className="border-collapse border">
              <Th className="border-collapse border">End Year</Th>
              <Th className="border-collapse border">Topics</Th>
              <Th className="border-collapse border">Sector</Th>
              <Th className="border-collapse border">Region</Th>
              <Th className="border-collapse border">Pestle</Th>
              <Th className="border-collapse border">Source</Th>

              <Th className="border-collapse border">Country</Th>
              <Th className="border-collapse border">City</Th>

              <Th className="border-collapse border">Intensity</Th>
              <Th className="border-collapse border">Likelihood</Th>
              <Th className="border-collapse border">Relevance</Th>
              <Th className="border-collapse border">Year</Th>




            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              ((filters.endYear === '' || item.end_year.includes(filters.endYear)) &&
                (filters.topics === '' || item.topic.toLowerCase().includes(filters.topics.toLowerCase())) &&
                (filters.sector === '' || item.sector.toLowerCase().includes(filters.sector.toLowerCase())) &&
                (filters.region === '' || item.region.toLowerCase().includes(filters.region.toLowerCase())) &&
                (filters.pestle === '' || item.pestle.toLowerCase().includes(filters.pestle.toLowerCase())) &&
                (filters.source === '' || item.source.toLowerCase().includes(filters.source.toLowerCase())) &&
                (filters.country === '' || item.country.toLowerCase().includes(filters.country.toLowerCase())) &&
                (filters.city === '' || item.city.toLowerCase().includes(filters.city.toLowerCase()))) && (
                <Tr key={index}>
                  <Td className="border-collapse border">{item.end_year}</Td>
                  <Td className="border-collapse border">{item.topic}</Td>
                  <Td className="border-collapse border">{item.sector}</Td>
                  <Td className="border-collapse border">{item.region}</Td>
                  <Td className="border-collapse border">{item.pestle}</Td>
                  <Td className="border-collapse border">{item.source}</Td>
                  <Td className="border-collapse border">{item.country}</Td>
                  <Td className="border-collapse border">{item.city}</Td>
                  <Td className="border-collapse border">{item.intensity}</Td>

                  <Td className="border-collapse border">{item.likelihood}</Td>
                  <Td className="border-collapse border">{item.relevance}</Td>
                  <Td className="border-collapse border">{new Date(item.added).getFullYear()}</Td>




                </Tr>
              )
            ))}
          </Tbody>
        </Table>
        
      </div>
    );
  }

  export default App;
