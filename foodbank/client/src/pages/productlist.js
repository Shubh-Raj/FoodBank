// import React from 'react';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   Button,
//   Flex
// } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// function ProductList() {
//   return (
//     <div className='productlist'>
//       <TableContainer>
//         <Table variant='simple'>
//           <TableCaption>Inventory</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Description</Th>
//               <Th>Id</Th>
//               <Th>Quantity</Th>
//               <Th>Measuring unit</Th>
//               <Th>Category</Th>
//               <Th>Family</Th>
//               <Th>Modify Item</Th> {/* New column */}
//             </Tr>
//           </Thead>
//           <Tbody>
//             <Tr>
//               <Td>Apple</Td>
//               <Td>IdNumber</Td>
//               <Td>3</Td>
//               <Td>Pieces</Td>
//               <Td>Fruit</Td>
//               <Td>8</Td>
//               <Td>
//                 <Link to='/modifyitem'>Modify</Link>
//               </Td>
//             </Tr>
//             <Tr>
//               <Td>Rice</Td>
//               <Td>IdNumber</Td>
//               <Td>7</Td>
//               <Td>Pieces</Td>
//               <Td>Legumes</Td>
//               <Td>10</Td>
//               <Td>
//                 <Link to='/modifyitem'>Modify</Link>
//               </Td>
//             </Tr>
//             <Tr>
//               <Td>Canned beans</Td>
//               <Td>IdNumber</Td>
//               <Td>13</Td>
//               <Td>Pieces</Td>
//               <Td>Legumes</Td>
//               <Td>9</Td>
//               <Td>
//                 <Link to='/modifyitem'>Modify</Link>
//               </Td>
//             </Tr>
//           </Tbody>
//         </Table>
//       </TableContainer>

      
//       <Flex justifyContent='center' mt={4}>
//         <Button
//           as={Link}
//           to='/additem'
//           colorScheme='green'
//         >
//           Add New Item
//         </Button>
//       </Flex>
//     </div>
//   );
// }

  
// export default ProductList;

import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';

function ProductList() {
  return (
    <div className='productlist'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Inventory</TableCaption>
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Id</Th>
              <Th>Quantity</Th>
              <Th>Measuring unit</Th>
              <Th>Category</Th>
              <Th>Family</Th>
              <Th>Modify Item</Th>
              <Th>Delete Item</Th> {/* New column */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Apple</Td>
              <Td>IdNumber</Td>
              <Td>3</Td>
              <Td>Pieces</Td>
              <Td>Fruit</Td>
              <Td>8</Td>
              <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
                <Icon as={DeleteIcon} color='red.500' cursor='pointer' />
              </Td>
            </Tr>
            <Tr>
            <Td>Rice</Td>
            <Td>IdNumber</Td>
            <Td>7</Td>
            <Td>Pieces</Td>
            <Td>Legumes</Td>
            <Td>10</Td>
            <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
                <Icon as={DeleteIcon} color='red.500' cursor='pointer' />
              </Td>
            </Tr>
            <Tr>
            <Td>Canned beans</Td>
            <Td>IdNumber</Td>
            <Td>13</Td>
            <Td>Pieces</Td>
            <Td>Legumes</Td>
            <Td>9</Td>
              <Td>
                <Link to='/modifyitem'>Modify</Link>
              </Td>
              <Td>
                <Icon as={DeleteIcon} color='red.500' cursor='pointer' />
              </Td>
              </Tr>
            {/* ... Other rows ... */}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justifyContent='center' mt={4}>
        <Button as={Link} to='/additem' colorScheme='green'>
          Add New Item
        </Button>
      </Flex>
    </div>
  );
}

export default ProductList;

