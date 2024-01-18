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
public class UpdateCustomerRequest {
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String codepostal;
    private Date dateanniv;
}
