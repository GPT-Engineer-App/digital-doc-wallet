import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, IconButton, Box, useToast } from "@chakra-ui/react";
import { FaIdCard, FaPassport, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const toast = useToast();

  const addDocument = () => {
    if (docType && docNumber) {
      setDocuments([...documents, { type: docType, number: docNumber }]);
      setDocType("");
      setDocNumber("");
      toast({
        title: "Documento adicionado.",
        description: "Seu documento foi adicionado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Erro.",
        description: "Por favor, preencha todos os campos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const removeDocument = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setDocuments(newDocuments);
    toast({
      title: "Documento removido.",
      description: "Seu documento foi removido com sucesso.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Carteira Digital de Documentos</Text>
        <HStack spacing={2} width="100%">
          <Input placeholder="Tipo de Documento (e.g., RG, CPF)" value={docType} onChange={(e) => setDocType(e.target.value)} />
          <Input placeholder="Número do Documento" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} />
          <IconButton aria-label="Adicionar Documento" icon={<FaPlus />} onClick={addDocument} />
        </HStack>
        <VStack spacing={2} width="100%">
          {documents.map((doc, index) => (
            <HStack key={index} spacing={2} width="100%" justifyContent="space-between" borderWidth="1px" borderRadius="md" padding={2}>
              <Box>
                <Text fontWeight="bold">{doc.type}</Text>
                <Text>{doc.number}</Text>
              </Box>
              <IconButton aria-label="Remover Documento" icon={<FaTrash />} onClick={() => removeDocument(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
