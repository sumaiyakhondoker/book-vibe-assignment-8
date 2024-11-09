// import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getStoredReadBooks } from '../utils';


const PageToReadBarchart = () => {

    const books = getStoredReadBooks()
    // console.log(books);
    
    // data
    const data = [];

   books.map(book => {
        let bName = book.bookName
        let totalPages = book.totalPages
        const newData = {bName, totalPages}
        data.push(newData)
      })
     

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


console.log(data);


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

    return (
        <BarChart 
          width={1280}
          height={600}
          data={data}
          style={{
            backgroundColor: '#1313130D',
            
          }}
          margin={{
            top: 80,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bName" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      );
    }
    


export default PageToReadBarchart;