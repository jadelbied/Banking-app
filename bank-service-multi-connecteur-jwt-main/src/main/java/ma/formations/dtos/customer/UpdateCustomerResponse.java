package ma.formations.dtos.customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UpdateCustomerResponse {
    private String message;
    private Long id;
    private String username;
    private String identityRef;
    private String firstname;
    private String lastname;
    private String email;
    private String codepostal;
    private Date dateanniv;
}
